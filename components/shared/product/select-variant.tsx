import { Button } from '@/components/ui/button'
import { IProduct } from '@/lib/db/models/product.model'
import Link from 'next/link'

export default function SelectVariant({
  product,
  size,
  shape,
}: {
  product: IProduct
  shape: string
  size: string
}) {
  const selectedShape = shape || product.shapes[0]
  const selectedSize = size || product.sizes[0]

  return (
    <>
      {product.shapes.length > 0 && (
        <div className='space-x-2 space-y-2'>
          <div>Shape:</div>
          {product.shapes.map((x: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedShape === x ? 'border-2 border-primary' : 'border-2'
              }
              key={x}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  shape: x,
                  size: selectedSize,
                })}`}
                key={x}
              >
                <div
                  style={{ backgroundColor: x }}
                  className='h-4 w-4 rounded-full border border-muted-foreground'
                ></div>
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
      {product.sizes.length > 0 && (
        <div className='mt-2 space-x-2 space-y-2'>
          <div>Size:</div>
          {product.sizes.map((x: string) => (
            <Button
              asChild
              variant='outline'
              className={
                selectedSize === x ? 'border-2  border-primary' : 'border-2  '
              }
              key={x}
            >
              <Link
                replace
                scroll={false}
                href={`?${new URLSearchParams({
                  shape: selectedShape,
                  size: x,
                })}`}
              >
                {x}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </>
  )
}
