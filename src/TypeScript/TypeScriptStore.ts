export interface IMeal {
    description: string
    id: string
    image: string
    ingredients: {} | undefined
    name: string
    price: number
    type: string
    amount: number
}

export interface ISelectedMeal {
    selectedMeal(selectValue: string): void
}

export interface ICartCtx {
    items: IMeal[];
    totalAmount: number;
    addItem: (
        item: {
            id: string,
            name: string,
            amount: number,
            description: string,
            price: number
        }) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

export interface IButtons {
    additionalClasses?: string
    buttonType?: string
    disabledButton?: boolean
    handleButtonClick?: any
    iconType?: string
    children?: any
}

export interface IVoidFunction {
    cancelHandler(): void
}


export interface IMealCardProps {
    meal: IMeal
}