import ProductForm from '@/components/produtoForm'
import React from 'react'

const page = () => {

    const data = {
        id: 'e2d5288e-9076-41bd-99f6-29c6fb4d5f27',
        name: 'Produto x',
        createdAt: '2024-02-25T14:39:48.810Z',
        updatedAt: '2024-02-25T14:39:48.810Z',
        storeId: '4d7e9eea-3d4c-4275-a4df-35d5555278a6',
        image: [
            {
                id: '0aaeb134-4306-4c0d-8f29-7784b92f4937',
                name: 'fenix.jpg',
                size: 1503203,
                url:
                    'https://upload-aws-demo.s3.us-east-2.amazonaws.com/8c1e1a74-c821-4306-8eb0-6ce00538ebdf-fenix.jpg',
                key: '8c1e1a74-c821-4306-8eb0-6ce00538ebdf-fenix.jpg',
                createdAt: '2024-02-25T14:39:48.810Z',
                updatedAt: '2024-02-25T14:39:48.810Z',
                productId: 'e2d5288e-9076-41bd-99f6-29c6fb4d5f27'
            },
            {
                id: 'e381d407-053f-4718-a185-2f63f2e2e7cb',
                name: 'Navy Geometric Technology LinkedIn Banner.png',
                size: 342123,
                url:
                    'https://upload-aws-demo.s3.us-east-2.amazonaws.com/f199dea9-7465-4269-a8c3-9ed074eace0a-Navy%20Geometric%20Technology%20LinkedIn%20Banner.png',
                key:
                    'f199dea9-7465-4269-a8c3-9ed074eace0a-Navy Geometric Technology LinkedIn Banner.png',
                createdAt: '2024-02-25T14:39:48.810Z',
                updatedAt: '2024-02-25T14:39:48.810Z',
                productId: 'e2d5288e-9076-41bd-99f6-29c6fb4d5f27'
            },
            {
                id: 'f5a00878-6a10-44ec-8df5-05936527da0b',
                name: 'pexels-vinÃ­cius-estevÃ£o-18775755.jpg',
                size: 791987,
                url:
                    'https://upload-aws-demo.s3.us-east-2.amazonaws.com/db372eaf-3593-4358-bfa6-02ed38a84f8f-pexels-vin%C3%83%C2%ADcius-estev%C3%83%C2%A3o-18775755.jpg',
                key:
                    'db372eaf-3593-4358-bfa6-02ed38a84f8f-pexels-vinÃ­cius-estevÃ£o-18775755.jpg',
                createdAt: '2024-02-25T14:39:48.810Z',
                updatedAt: '2024-02-25T14:39:48.810Z',
                productId: 'e2d5288e-9076-41bd-99f6-29c6fb4d5f27'
            }
        ]
    }

    return (
        <div>
            <ProductForm initialData={data} />
        </div>
    )
}

export default page