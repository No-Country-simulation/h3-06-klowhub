type CardProps = {
    title: string;
    amount: string;
    color: string;
};

export const Card: React.FC<CardProps> = ({ title, amount, color }) => (
    <div className="bg-gray-800 rounded-lg p-4 text-center flex flex-col items-center shadow-md">
        <p className="text-gray-400 text-sm">{title}</p>
        <p className={`text-2xl font-bold ${color}`}>{amount}</p>
    </div>
);