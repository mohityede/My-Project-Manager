import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getUserProfile, login } from "@/redux/auth/action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch=useDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData) => {
    dispatch(login(formData))
    dispatch(getUserProfile())
  };
  return (
    <div className="space-y-5">
      <h1 className="font-mono font-semibold text-2xl">Login</h1>
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
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Login;
