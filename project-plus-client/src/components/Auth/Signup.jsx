import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getUserProfile, register } from "@/redux/auth/action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function Signup() {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });

  const onSubmit = (formData) => {
    dispatch(register(formData))
    dispatch(getUserProfile())
    console.log("user data", formData);
  };
  return (
    <div className="space-y-5">
      <h1 className="font-mono font-semibold text-2xl">Register</h1>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border border-primary w-full py-5 px-5"
                    placeholder="Your email address..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border border-primary w-full py-5 px-5"
                    placeholder="Your Full Name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="border border-primary w-full py-5 px-5"
                    placeholder="Password..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full py-5 mt-3">
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Signup;
