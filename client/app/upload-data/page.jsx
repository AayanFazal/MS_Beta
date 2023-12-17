'use client'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

export default function page() {
    const form = useRef()
    const [uploaded, setUploaded] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setUploaded(!uploaded)
    }

    useEffect(() => {
        if (uploaded) setTimeout(() => setUploaded(!uploaded), 3000)
    }, [uploaded])

    return (
        <div>
            <Card className='mx-auto w-[350px] mt-20'>
                <CardHeader>
                    <CardTitle>Upload CSV Data</CardTitle>
                    <CardDescription>Upload quickscouts CSV output file</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit} ref={form}>
                        <Input type='file'></Input>
                        <Input type='text' placeholder='Competition name'></Input>
                        <Input type='password' placeholder='Password'></Input>
                        <Button type='submit'>Upload</Button>
                    </form>
                </CardContent>
            </Card>
            {uploaded && (
                <Alert className='absolute bottom-10 right-10 w-fit'>
                    <AlertTitle>Upload Complete</AlertTitle>
                    <AlertDescription>
                        You can now upload again if you need to.
                    </AlertDescription>
                </Alert>
            )}
        </div>
    )
}
