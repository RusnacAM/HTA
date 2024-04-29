import { cva } from "class-variance-authority";
import React from "react";
import {TextAreaConfig} from "./TextArea.config";
import TextAreaContainer from "./components/TextAreaContainer";

const TextAreaVariants = cva(
    ["h-fit", "font-montserrat", "text-grey-400", "font-medium", "bg-transparent", "resize-none", "outline-none", ],
    {
        variants: {
            ...TextAreaConfig,
        },
        defaultVariants: {
            intent: "default",
            size: "medium",
            corner: "rectangle",
            border: false,
            background: false,
            fullWidth: false,
        },
    }
);

export default function TextArea(
    {
        className,
        id,
        name,
        intent,
        rows,
        cols,
        border,
        corner,
        background,
        label = undefined,
        placeholder = undefined,
        fullWidth,
        width,
        height,
        children,
        ...props
    })
{
    return (
        <TextAreaContainer fullWidth={fullWidth}>
            {label && (
                <label htmlFor={id} className="font-semibold text-grey-500 text-sm">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                
                className={TextAreaVariants({intent, border, background, corner, fullWidth, width, height, className})}
                {...props}
            />
        </TextAreaContainer>
    );
}