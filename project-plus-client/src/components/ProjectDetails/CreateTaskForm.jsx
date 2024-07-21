import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";

function CreateTaskForm() {
  const form=useForm({
    defaultValues:{
      taskName:"",
      description:""
    }
  })

  const onSubmit=(formData)=>{
    console.log("invite user data",formData)
  }
  return (
    <>
      <div>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control}
          name="taskName"
          render={({field})=>
            <FormItem>
              <FormControl>
                <Input {...field} 
              
                type="text" 
                className="border border-primary w-full py-5 px-5"
                placeholder="Task Title..."/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />
          <FormField control={form.control}
          name="description"
          render={({field})=>
            <FormItem>
              <FormControl>
                <Input {...field} 
              
                type="text" 
                className="border border-primary w-full py-5 px-5"
                placeholder="Task Description..."/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />         
          
          <DialogClose>            
              <Button type="submit" className="w-full py-5 mt-3">Create Task</Button>              
          </DialogClose>
        </form>
      </Form>
      </div>
    </>
  );
}

export default CreateTaskForm;
