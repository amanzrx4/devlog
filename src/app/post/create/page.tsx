import EditorForm from "@/components/EditorForm"
import { fetchCategories, fetchTags } from "../../../../actions"

export default async function PostCreate() {
  const categories = await fetchCategories()
  const tags = await fetchTags()

  return (
    <div>
      <EditorForm categories={categories} tags={tags} />
    </div>
  )
}
