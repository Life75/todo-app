"use client";

import { TextArea } from "@/components/notepad/TextArea";
import useIsOnline from "@/hooks/viewmodels/utils/useIsOnline";


export default function Notes() {
    const isOnline = useIsOnline()

    return (
        <div>Notes

            <p>Online status: {isOnline ? "Yes" : "No"}</p>
            <TextArea></TextArea>
        </div>
    )
}