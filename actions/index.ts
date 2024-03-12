"use server"
import prisma from "@/utils/db"
import { Post } from "@prisma/client"
import { revalidatePath } from "next/cache"

/**
 *
 * Queries
 */

/**
 *
 * @description fetches all posts
 */
export async function fetchPosts() {
  return prisma.post.findMany()
}

/**
 * fetches posts with title only property
 */
export async function fetchPostsPartial() {
  return prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  })
}

export async function fetchPost(id: number) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  })
}

export async function fetchCategories() {
  return prisma.category.findMany()
}

export async function fetchTags() {
  return prisma.tag.findMany()
}

/**
 *
 * Mutations
 *
 */

/**
 *
 * @param title
 * @param description
 * @param categoryId
 * @param tags tags IDs
 *
 */

// const postSchema = object({
//   categoryId: string(),
//   content: string([minLength(1)]),
//   title: string([minLength(1)]),
// })

export async function createPost({
  tagIds = [],
  ...args
}: Omit<Post, "id"> & {
  tagIds?: string[]
}) {
  await prisma.post.create({
    data: {
      ...args,
      tags: {
        connect: tagIds.map((id) => ({ id })),
      },
    },
  })

  revalidatePath("/", "page")
}

export async function addReply(
  postId: number,
  { content }: { content: string },
) {
  await prisma.reply.create({
    data: {
      content,
      postId,
    },
  })
  revalidatePath(`post/${postId}`)
}

export async function fetchRepliesForPost(postId: number) {
  return await prisma.reply.findMany({
    where: {
      postId,
    },
  })
}
