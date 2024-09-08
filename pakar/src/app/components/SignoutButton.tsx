"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "../../../node_modules/next/cache";
import { redirect } from "../../../node_modules/next/navigation";
import { signout } from "@/app/signout/action";

export function handleSignOut() {
  return console.log("here");
}

export default function SignoutButton() {
  return (
    <Button
      variant="outline"
      className="text-muted-foreground transition-colors hover:text-foreground"
      onClick={async () => {
        handleSignOut();
      }}
    >
      Signout Now!
    </Button>
  );
}
