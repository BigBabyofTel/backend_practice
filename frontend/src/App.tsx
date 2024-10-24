import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-form-adapter";

const signUpSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(3, "First name must be at least 3 characters"),
    email: z.string().email(),
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(3, "Password must be at least 3 characters"),
    confirmPassword: z
      .string()
      .min(3, "Password must be at least 3 characters"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

type signUp = z.infer<typeof signUpSchema>;

function App() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    } as signUp,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: signUpSchema,
    },
  });

  return (
    <>
      <div className="border-4 h-dvh w-full flex flex-col justify-center items-center">
        <div className="border-2 h-[600px] p-2 flex flex-col">
          <h1 className="text-6xl text-center p-2">Sign up</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="flex flex-col items-start justify-evenly h-full"
          >
            <div>
              <form.Field
                name="firstName"
                validators={{
                  onChange: z
                    .string()
                    .min(3, "First name must be at least 3 characters"),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().refine(
                    async (value) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      return !value.includes("error");
                    },
                    {
                      message: "No 'error' allowed in first name",
                    }
                  ),
                }}
                children={(field) => {
                  return (
                    <>
                      <label htmlFor={field.name}>First Name:</label>
                      <input
                        className="p-2 border"
                        type="text"
                        required
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <div className="text-red-600 text-sm mt-1">
                          {field.state.meta.errors}
                        </div>
                      )}
                    </>
                  );
                }}
              />
            </div>
            <div>
              <form.Field
                name="lastName"
                validators={{
                  onChange: z
                    .string()
                    .min(3, "Last name must be at least 3 characters"),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().refine(
                    async (value) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      return !value.includes("error");
                    },
                    {
                      message: "No 'error' allowed in last name",
                    }
                  ),
                }}
                children={(field) => {
                  return (
                    <>
                      <label htmlFor={field.name}>Last Name:</label>
                      <input
                        className="p-2 border"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <div className="text-red-600 text-sm mt-1">
                          {field.state.meta.errors}
                        </div>
                      )}
                    </>
                  );
                }}
              />
            </div>
            <div>
              <form.Field
                name="email"
                validators={{
                  onChange: z.string().email(),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().email(),
                }}
                children={(field) => {
                  return (
                    <>
                      <label htmlFor={field.name}>Email:</label>
                      <input
                        className="p-2 border"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <div className="text-red-600 text-sm mt-1">
                          {field.state.meta.errors}
                        </div>
                      )}
                    </>
                  );
                }}
              />
            </div>
            <div>
              <form.Field
                name="username"
                validators={{
                  onChange: z
                    .string()
                    .min(3, "Username must be at least 3 characters"),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().refine(
                    async (value) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      return !value.includes("error");
                    },
                    {
                      message: "No 'error' allowed in Username",
                    }
                  ),
                }}
                children={(field) => {
                  return (
                    <>
                      <label htmlFor={field.name}>Username:</label>
                      <input
                        className="p-2 border"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <div className="text-red-600 text-sm mt-1">
                          {field.state.meta.errors}
                        </div>
                      )}
                    </>
                  );
                }}
              />
            </div>
            <div>
              <form.Field
                name="password"
                validators={{
                  onChange: z
                    .string()
                    .min(3, "Password must be at least 3 characters"),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().refine(
                    async (value) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      return !value.includes("error");
                    },
                    {
                      message: "No 'error' allowed in first name",
                    }
                  ),
                }}
                children={(field) => {
                  return (
                    <>
                      <label htmlFor={field.name}>Password:</label>
                      <input
                        className="p-2 border"
                        type="password"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <div className="text-red-600 text-sm mt-1">
                          {field.state.meta.errors}
                        </div>
                      )}
                    </>
                  );
                }}
              />
            </div>
            <div>
              <form.Field
                name="confirmPassword"
                validators={{
                  onChange: z
                    .string()
                    .min(3, "Password must be at least 3 characters"),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().refine(
                    async (value) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      return !value.includes("error");
                    },
                    {
                      message: "No 'error' allowed in first name",
                    }
                  ),
                }}
                children={(field) => {
                  return (
                    <>
                      <label htmlFor={field.name}>Confirm Password:</label>
                      <input
                        className="p-2 border"
                        type="password"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <div className="text-red-600 text-sm mt-1">
                          {field.state.meta.errors}
                        </div>
                      )}
                    </>
                  );
                }}
              />
            </div>
            <button onSubmit={form.handleSubmit}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
