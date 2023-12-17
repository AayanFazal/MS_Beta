import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
import React from 'react'

export default function page() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='text-center'>Invoice</TableHead>
                    <TableHead className='text-center'>Status</TableHead>
                    <TableHead className='text-center'>Method</TableHead>
                    <TableHead className='text-center'>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className='text-center'>Idk</TableCell>
                    <TableCell className='text-center'>Idk</TableCell>
                    <TableCell className='text-center'>Idk</TableCell>
                    <TableCell className='text-center'>Idk</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}
