import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { priorities } from "@/config/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewTask } from "@/redux/task/action";

function CreateTaskForm({status}) {
  const dispatch=useDispatch();
  const {id}=useParams()
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      dueDate: null,
      priority: "",
      status,
      forProjectId:Number(id)
    },
  });
  const today=new Date().toISOString().split('T')[0]

  const onSubmit = (formData) => {
    console.log("create task data", formData);
    dispatch(createNewTask(formData))
  };
  return (
    <>
      <div>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border border-primary w-full py-5 px-5"
                      placeholder="Task Title..."
                    />
                  </FormControl>
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
                      placeholder="Task Description..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      min={today}
                      type="date"
                      className="border border-primary w-full py-5 px-5"
                      placeholder="Task Due Date..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
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
                          placeholder="Priority"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem
                          className="focus:bg-primary focus:text-white"
                          key={priority}
                          value={priority.toLowerCase() || "null"}
                        >
                          {priority}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogClose>
              <Button type="submit" className="w-full py-5 mt-3">
                Create Task
              </Button>
            </DialogClose>
          </form>
        </Form>
      </div>
    </>
  );
}

export default CreateTaskForm;
