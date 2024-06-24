import React from "react";

export function withOutline(Component: React.ComponentType, args: any) {
    return (
        <div
            className="tw-w-fit tw-h-fit"
            style={{
                outline: "1px solid red",
            }}
        >
            <Component {...args} />
        </div>
    );
}

export function withBorder(Component: React.ComponentType, args: any) {
    return (
        <div
            className="tw-w-fit tw-h-fit"
            style={{
                border: "1px solid red",
            }}
        >
            <Component {...args} />
        </div>
    );
}

export function withBackground(Component: React.ComponentType, args: any) {
    return (
        <div
            className="tw-w-full tw-h-full"
            style={{background: "#02c3c6"}}
        >
            <Component {...args} />
        </div>
    );
}

// export function withResizableBox(Component: React.ComponentType, args: any) {
//     return (
//         <div
//             style={{
//                 resize: "both",
//                 overflowX: "auto",
//                 overflowY: "scroll",
//                 scrollbarGutter: "stable",
//             }}
//         >
//             <Component {...args} />
//         </div>
//     );
// }

export function withResizableBox(initialWidth: string, initialHeight: string) {
    function decorator(Component: React.ComponentType, args: any) {
        return (
            <div
                style={{
                    resize: "both",
                    overflowX: "auto",
                    overflowY: "scroll",
                    scrollbarGutter: "stable",
                    width: initialWidth,
                    height: initialHeight,
                }}
            >
                <Component {...args} />
            </div>
        );
    }

    return decorator;
}
