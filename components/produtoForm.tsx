"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";;
import { useEffect, useState } from "react"
import Image from "next/image";
import { z } from "zod";

type ProductFormProps = {
    initialData: any | null;
};
const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
    const result = sizeInBytes / (1024 * 1024);
    return +result.toFixed(decimalsNum);
};
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_IMAGE_SIZE = 2; //In MegaBytes

const ProductSchema = z.object({
    name: z.string().min(1, { message: "Nome obrigatório" }),
    images: z
        .custom<FileList>()
        .refine((files) => {
            return Array.from(files ?? []).length !== 0;
        }, "Selecione uma imagem")
        .refine((files) => {
            return Array.from(files ?? []).every(
                (file) => sizeInMB(file.size) <= MAX_IMAGE_SIZE
            );
        }, `O tamanho máximo da imagem é ${MAX_IMAGE_SIZE}MB`)
        .refine((files) => {
            return Array.from(files ?? []).every((file) =>
                ACCEPTED_IMAGE_TYPES.includes(file.type)
            );
        }, "Tipo não suportado"),
})

type ProductFormValues = z.infer<typeof ProductSchema>

const ProductForm = ({ initialData }: ProductFormProps) => {

    console.log(initialData)

    const s = initialData ? initialData.image.map((image: { url: any; }) => image.url) : null
    const [images, setImages] = useState<string[] | null>(initialData ? s : null);

    const form = useForm({
        resolver: zodResolver(ProductSchema),
        defaultValues: initialData || {
            image: undefined,
        },
    });

    const onSubmit = async (data: ProductFormValues) => {
        console.log(data)
    }

    const onDeleteStateImageAndVaAlueInput = (url: string, index: number) => {
        if (watchImage) {
            const removeImageInInputValue = Array.from(watchImage).filter((_, i) => i !== index)
            form.setValue("images", removeImageInInputValue as any)

        }
        setImages(images.filter((image) => image !== url))
    }

    const watchImage = form.watch("images");


    return (

        <div className="px-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 pt-3 max-w-sm"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input  {...field} placeholder="Digite o nome do Outdoor" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{initialData ? "Alterar imagem de fundo" : "Imagem de fundo"}</FormLabel>
                                <FormControl>
                                    <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">Clique e selecione uma imagem</p>
                                        </div>
                                        <Input
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            type="file"
                                            multiple
                                            onChange={(e) => {
                                                field.onChange(e.target.files)
                                                console.log(e.target.files)
                                                const files = Array.from(e.target.files ?? []);
                                                const transformFile = files.map((file) => URL.createObjectURL(file));
                                                setImages(transformFile);
                                            }}

                                        />
                                    </label>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-x-4">
                        {images && images.map((image: any, index) => (
                            <div className="mb-4 flex items-center gap-4" key={image}>
                                <div className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                                    <div className="z-10 absolute top-2 right-2">
                                        <Button type="button" onClick={() => onDeleteStateImageAndVaAlueInput(image, index)} variant="destructive" size="sm">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Image
                                        src={image}
                                        alt="image"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button type="submit">Atualizar</Button>
                </form>
            </Form>
        </div>
    );
};

export default ProductForm; 
