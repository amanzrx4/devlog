"use server";
import prisma from "@/utils/db";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function fetchPosts() {
  return prisma.post.findMany();
}

/**
 * fetches post's title only
 */
export async function fetchPostsPartial() {
  return prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  });
}

export async function fetchPost(id: number) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export async function createPost(title: string, description: string) {
  await prisma.post.create({
    data: {
      description,
      title,
    },
  });
}
