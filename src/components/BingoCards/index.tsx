"use client";

import { useGetBingoCards } from "~/actions/get-bingocards";
import BingoCard from "./BingoCard";
import { useEffect, useRef } from "react";
import { useBingoCheck } from "~/hooks/useBingoCheck";
import { setIsWin, useBingoStore } from "~/zustand/stores/useBingoStore";
import { useToast } from "~/components/ui/use-toast";
import { TBingoCard } from "~/types/bingo.type";
import styles from "./index.module.css";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "~/lib/query";
import { postAddUser } from "~/actions/post-user";
import { useGetUser } from "~/actions/get-user";
import { useGetDate } from "~/hooks/useGetDate";
import html2canvas from 'html2canvas';

export default function BingoCards(clerkId: any) {
  const { toast } = useToast();
  const { data, isLoading } = useGetBingoCards(clerkId.clerkId);
  const { user } = useUser();
  const queryClient = getQueryClient();
  const isBingo = useBingoStore((state) => state.isBingo);
  const isWin = useBingoStore((state) => state.isWin);

  const { data: userData } = useGetUser(clerkId.clerkId);

  const tableRef = useRef(null);

  const captureScreenshot = () => {
    if (tableRef.current) {
        html2canvas(tableRef.current).then(canvas => {
            canvas.toBlob(blob => {
                if (blob) {
                    navigator.clipboard.write([
                        new ClipboardItem({
                            'image/png': blob
                        })
                    ]).then(() => {
                        console.log('Image copied to clipboard');
                        toast({
                            title: "Image copied to clipboard",
                            description: "You can now paste the image into an email or document",
                            variant: "success",
                        });
                    }).catch(err => {
                        console.error('Failed to copy image: ', err);
                    });
                }
            }, 'image/png');
        });
    }
};

  const mutation = useMutation({
    mutationFn: async () => {
      return postAddUser({ user });
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["bingocards-data"] });
      }, 500);
    },
  });

  useEffect(() => {
    const date = useGetDate();
    if (!userData?.wins?.includes(date)) {
      useBingoCheck(data, user);
    }
  }, [data, userData]);

  useEffect(() => {
    if (isBingo) {
      toast({
        title: "Bingo!",
        description: "You have a bingo!",
        variant: "success",
      });
    }
  }, [isBingo]);

  if (isLoading) return <div className={styles.container}>Loading...</div>;

  if (!data)
    return (
      <>
        <div className={styles.container}>
          <p className="text-3xl font-medium">Witaj nowy kosowniku!</p>
          <p className="text-xl font-light text-slate-400">
            Aby rozpocząć rozgrywkę naciśnij na przycisk i wygeneruj bingo
          </p>
          <Button className="mt-6" onClick={() => mutation.mutate()}>
            Generuj
          </Button>
        </div>
      </>
    );

  return (
    <>
      <div className={styles.cardgrid} ref={tableRef}>
        {data?.map((card: TBingoCard) => (
          <div key={card.id} className="h-auto" >
            <BingoCard card={card} />
          </div>
        ))}
      </div>
      {isWin && (
              <div className="h-fit w-fit p-4 text-center">
            
        <Button onClick={captureScreenshot}>
          Pobierz link
        </Button>
        </div>
      )}
    </>
  );
}
