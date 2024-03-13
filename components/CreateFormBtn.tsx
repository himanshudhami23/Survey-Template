"use client";

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import {BsFileEarmarkPlus} from "react-icons/bs";
import {ImSpinner2} from "react-icons/im";
import  {Button} from "./ui/button";
import { Label } from './ui/label';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';




const formSchema = z.object({
    name:z.string().min(4),
    description: z.string().optional(),
});

type formSchemaType = z.infer<typeof formSchema>


function CreateFormBtn() {
    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values:formSchemaType){
        try {
            
        } catch (error) {
            toast({
                title:"Error",
                description: "Something went wrong",
                variant:"destructive"
            });
        }
        
    }
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Create New Form</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create Form</DialogTitle>
                <DialogDescription>
                    Create New Form To Start Collecting response
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="description"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea rows={5} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                </form>
            </Form>
            <DialogFooter>
                <Button
                onClick={()=>{
                    form.handleSubmit(onSubmit);
                }}
                disabled={form.formState.isSubmitting} className="w-full mt-4">
                    {!form.formState.isSubmitting && <span>Save</span>} 
                    {form.formState.isSubmitting && (
                        <ImSpinner2 className="animate-spin"/>
                    )}
                    </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;