'use server'
import { revalidatePath } from 'next/cache';

 const revalidate = ()=>{
    revalidatePath('/')
}

export default revalidate