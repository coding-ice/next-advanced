import Redis from "ioredis";

const redis = new Redis();

export interface Item {
	title: string;
	content: string;
	updateTime: string;
}

const initialData = {
	"1702459181837":
		'{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
	"1702459182837":
		'{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
	"1702459188837":
		'{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}',
};

export const getAllNotes = async () => {
	const notes = await redis.hgetall("notes");
	if (Object.keys(notes).length === 0) {
		await redis.hset("notes", initialData);
	}

	return await redis.hgetall("notes");
};

export const addNote = async (item: Item) => {
	const uuid = Date.now();
	await redis.hset("notes", uuid, JSON.stringify(item));
};

export const deleteNote = async (uuid: string) => {
	await redis.hdel("notes", uuid);
};

export const updateNote = async (uuid: string, item: Item) => {
	await redis.hset("notes", uuid, JSON.stringify(item));
};

export const getNote = async (uuid: string) => {
	const note = await redis.hget("notes", uuid);
	return note ? JSON.parse(note) : null;
};

export default redis;
