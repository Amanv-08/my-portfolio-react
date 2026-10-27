import { useEffect, useRef } from "react";

export default function Cursor() {

    const cursorRef = useRef(null);

    useEffect(() => {

        const moveCursor = (evt) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${evt.clientX}px`;
                cursorRef.current.style.top = `${evt.clientY}px`;
            };
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className=" hidden md:block pointer-events-none fixed left-0 top-0 z-99999 h-2 w-2 rounded-full bg-white opacity-25"
            style={
                { transform: "translate(-50%, -50%)",}
            }
        />
    );
};