import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

import { Menu } from "@/types/menu";

interface ComponentProps {
    menu: Menu[];
}

const Header = (props: ComponentProps) => {
    const { menu } = props;
    return (
        <Sheet>
            <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 hidden md:flex">
                        <a
                            className="mr-6 flex items-center space-x-2"
                            href="/"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-6 w-6"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <span className="hidden font-bold sm:inline-block">
                                shadcn/ui
                            </span>
                        </a>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/docs"
                            >
                                Documentation
                            </a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground"
                                href="/docs/components"
                            >
                                Components
                            </a>
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/examples"
                            >
                                Examples
                            </a>
                            <a
                                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                                href="https://github.com/shadcn/ui"
                            >
                                GitHub
                            </a>
                        </nav>
                    </div>
                    <SheetTrigger asChild>
                        <button
                            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:R15hja:"
                            data-state="closed"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-6 w-6"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <path d="M9 3v18"></path>
                                <path d="m14 9 3 3-3 3"></path>
                            </svg>
                            <span className="sr-only">Toggle Menu</span>
                        </button>
                    </SheetTrigger>
                    <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <button className="inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                                <span className="hidden lg:inline-flex">
                                    Search documentation...
                                </span>
                                <span className="inline-flex lg:hidden">
                                    Search...
                                </span>
                                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </button>
                        </div>
                        <nav className="flex items-center space-x-1">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/shadcn/ui"
                            >
                                <div className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0">
                                    <svg
                                        viewBox="0 0 438.549 438.549"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">GitHub</span>
                                </div>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/shadcn"
                            >
                                <div className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-5 w-5 fill-current"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                    <span className="sr-only">Twitter</span>
                                </div>
                            </a>
                            <button
                                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
                                type="button"
                                id="radix-:Rtlhja:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                >
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 3v1"></path>
                                    <path d="M12 20v1"></path>
                                    <path d="M3 12h1"></path>
                                    <path d="M20 12h1"></path>
                                    <path d="m18.364 5.636-.707.707"></path>
                                    <path d="m6.343 17.657-.707.707"></path>
                                    <path d="m5.636 5.636.707.707"></path>
                                    <path d="m17.657 17.657.707.707"></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                >
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                                <span className="sr-only">Toggle theme</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            <SheetContent position="left" size="lg">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-full w-full">
                    {menu.map((item, index) => (
                        <div key={index} className="pb-4">
                            <h4 className="mb-1 rounded-md px-2 py-1 text-lg font-semibold">
                                {item.title}
                            </h4>
                            <div className="grid grid-flow-row auto-rows-max text-sm">
                                {item.items.map((subitem, index) => (
                                    <a
                                        key={index}
                                        className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                                        target=""
                                        rel=""
                                        href={subitem.url}
                                    >
                                        {subitem.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};

export default Header;
