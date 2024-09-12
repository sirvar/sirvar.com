"use client";

import { subscribe } from "@/db/blog";
import { Loader2 } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  success: false,
  message: "",
};

export const Form = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="text-sm w-full outline-none focus:border-white bg-background-primary transition-colors border-zinc-600 border px-4 py-2 rounded-full"
        required
      />
      <button
        type="submit"
        className="border rounded-lg p-2 text-sm border-zinc-800 hover:border-zinc-600 transition-all hover:bg-zinc-800 flex gap-2 items-center justify-center w-28"
        disabled={pending}
      >
        {pending ? <Loader2 className="animate-spin w-5 h-5" /> : "Subscribe"}
      </button>
    </>
  );
};

interface BlogSubscriptionProps {
  className?: string;
}

export const BlogSubscription = ({ className }: BlogSubscriptionProps) => {
  const [state, formAction] = useFormState(subscribe, initialState);

  if (state.success && state.message) {
    return (
      <p className={`mt-6 text-center text-zinc-500 ${className}`}>
        {state.message}
      </p>
    );
  }

  return (
    <div className={`mt-6 px-4 w-full ${className}`}>
      <p className="mb-4 text-center text-zinc-500">
        Subscribe to get notified about new posts
      </p>
      <form
        action={formAction}
        className="mx-auto flex gap-4 w-full sm:w-10/12 items-center"
      >
        <Form />
      </form>
      {!state.success && state.message && (
        <p className="text-center mt-2 text-sm text-red-500">
          Error: {state.message}
        </p>
      )}
    </div>
  );
};
