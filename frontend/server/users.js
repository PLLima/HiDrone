"use server";

export const get = async () => {
    const data = await fetch(`${process.env.APP_URL}/users`);
    const json = await data.json();
    console.log(data);
};