export function getUser(userId: number) {
    return `User ${userId}`;
}

export function updateUser(userId: number, data: any) {
    console.log(`Updated user ${userId} with data:`, data);
}
