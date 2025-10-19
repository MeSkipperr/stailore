"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ButtonPage() {
    return (
        <div className="w-full min-h-screen flex flex-col flex-wrap gap-4 justify-center items-center p-8">
            <div className="w-full flex gap-8 items-center justify-center">
                <Button transition={false} variant="default" size="sm"  >
                    Explore Gallery
                </Button>
                <Button transition={false} variant="default" >
                    Explore Gallery
                </Button>
                <Button transition={false} variant="default" size="lg" >
                    Explore Gallery
                </Button>
                <Button transition={false} variant="default" size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button transition={false} variant="default" disabled  size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button transition={false} variant="default" size="icon" >
                    <ShoppingCart />
                </Button>
            </div>
            <div className="w-full flex gap-8 items-center justify-center">
                <Button variant="default" size="sm" >
                    Explore Gallery
                </Button>
                <Button variant="default" >
                    Explore Gallery
                </Button>
                <Button variant="default" size="lg" >
                    Explore Gallery
                </Button>
                <Button variant="default" size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="default" disabled  size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="default" size="icon" >
                    <ShoppingCart />
                </Button>
            </div>
            <div className="w-full flex gap-8 items-center justify-center">
                <Button variant="secondary" size="sm" >
                    Explore Gallery
                </Button>
                <Button variant="secondary" >
                    Explore Gallery
                </Button>
                <Button variant="secondary" size="lg" >
                    Explore Gallery
                </Button>
                <Button variant="secondary" size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="secondary"  disabled size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="secondary" size="icon" >
                    <ShoppingCart />
                </Button>
            </div>
            <div className="w-full flex gap-8 items-center justify-center">
                <Button variant="outline" size="sm" >
                    Explore Gallery
                </Button>
                <Button variant="outline" >
                    Explore Gallery
                </Button>
                <Button variant="outline" size="lg" >
                    Explore Gallery
                </Button>
                <Button variant="outline" size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="outline"  disabled size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="outline" size="icon" >
                    <ShoppingCart />
                </Button>
            </div>
            <div className="w-full flex gap-8 items-center justify-center">
                <Button variant="ghost" size="sm" >
                    Explore Gallery
                </Button>
                <Button variant="ghost" >
                    Explore Gallery
                </Button>
                <Button variant="ghost" size="lg" >
                    Explore Gallery
                </Button>
                <Button variant="ghost" size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="ghost"  disabled  size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="ghost" size="icon" >
                    <ShoppingCart />
                </Button>
            </div>
            <div className="w-full flex gap-8 items-center justify-center">
                <Button variant="destructive" size="sm" >
                    Explore Gallery
                </Button>
                <Button variant="destructive" >
                    Explore Gallery
                </Button>
                <Button variant="destructive" size="lg" >
                    Explore Gallery
                </Button>
                <Button variant="destructive" size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="destructive"  disabled  size="lg" >
                    <ShoppingCart />Explore Gallery
                </Button>
                <Button variant="destructive" size="icon" >
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
}
