'use client'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from 'next/link'


export default function Navbar() {
    return (
        <NavigationMenu className='mx-auto p-2'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href='/' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/competitions' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Competitions</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/upload-data' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Upload Data</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
