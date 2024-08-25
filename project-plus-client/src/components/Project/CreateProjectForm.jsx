import { DialogClose } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { createNewProject } from "@/redux/project/action";
import { categories, tags } from "@/config/data";

function CreateProjectForm() {
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      tags: [],
    },
  });

  const onSubmit = (formData) => {
    dispatch(createNewProject(formData));
  };

  const handleTagsChange = (newTag) => {
    const currentTags = form.getValues("tags");
    const upudatedTags = currentTags.includes(newTag)
      ? currentTags.filter((tag) => tag != newTag)
      : [...currentTags, newTag];
    form.setValue("tags", upudatedTags);
  };
  return (
    <>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border border-primary w-full py-5 px-5"
                    placeholder="Project Name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="border border-primary rounded-sm">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value?.toLowerCase()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        className="placeholder-color"
                        placeholder="Category"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem
                        className="focus:bg-primary focus:text-white"
                        key={cat}
                        value={cat.toLowerCase()}
                      >
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border border-primary w-full py-5 px-5"
                    placeholder="Project Description..."
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={(val) => handleTagsChange(val)}>
                  <FormControl className="border border-primary rounded-sm">
                    <SelectTrigger>
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                  </FormControl>
                  <div className="flex gap-1 flex-wrap">
                    {field.value.map((item) => (
                      <div
                        onClick={() => handleTagsChange(item)}
                        key={item}
                        className="cursor-pointer flex rounded-sm items-center border gap-2 py-1 px-3"
                      >
                        <span className="text-sm font-serif">{item}</span>
                        <Cross2Icon className="h-3 w-3" />
                      </div>
                    ))}
                  </div>
                  <SelectContent>
                    {tags.map((tag) => (
                      <SelectItem
                        className="focus:bg-primary focus:text-white"
                        key={tag}
                        value={tag}
                      >
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose>
            {true ? (
              <Button type="submit" className="w-full py-5 mt-3">
                Create
              </Button>
            ) : (
              <div>
                <span>
                  you can create only 3 project with free plan, please upgrade
                  to Plus member
                </span>
              </div>
            )}
          </DialogClose>
        </form>
      </Form>
    </>
  );
}

export default CreateProjectForm;
