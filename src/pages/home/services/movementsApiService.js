export const getUserMovements = () => {
    return [
        {
            id: 'test-1',
            amount: 420,
            emoji: '🐑',
            date: new Date(),
            description: 'oven',
            tags: ['a', 'b', 'c', 'd', 'e', 'f'],
        },
        {
            id: 'test-2',
            amount: 422,
            emoji: '💦',
            date: new Date(),
            description: 'oven2',
            tags: ['a', 'b', 'c', 'd', 'e', 'f'],
        },
        {
            id: 'test-3',
            amount: -42,
            emoji: '🍕',
            date: new Date(),
            description: 'oven2',
            tags: ['a', 'b', 'c', 'd', 'e', 'f'],
        }
    ];
}