
interface QuantityProps {
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

const QuantityComponent = ({ quantity, onDecrease, onIncrease }: QuantityProps) => {
    return (
        <div className='flex items-center gap-2 '>
            <button className='btn btn-ghost' onClick={onDecrease} disabled={quantity <= 1}>-</button>
            <p>{quantity}</p>
            <button className='btn btn-ghost' onClick={onIncrease}>+</button>
        </div>
    )
}

export default QuantityComponent