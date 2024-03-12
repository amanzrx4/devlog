import EditorComponent from "@/components/EditorComponent"
import { fetchCategories, fetchTags } from "../../../../actions"

export default async function PostCreate() {
  const categories = await fetchCategories()
  const tags = await fetchTags()
  
  return (
    <div>
      <EditorComponent categories={categories} tags={tags} />
    </div>
  )
}
