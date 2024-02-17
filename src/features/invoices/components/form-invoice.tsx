/* eslint-disable react/no-children-prop */
import { Button, Input } from "@/features/ui";
import styles from "../styles/form-invoice.module.css";
import { useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
import {
  date,
  email,
  maxValue,
  minLength,
  minValue,
  number,
  string,
} from "valibot";

export const FormInvoice = ({
  setOpenDrawer,
}: {
  setOpenDrawer: (prop: boolean) => {};
}) => {
  const form = useForm({
    defaultValues: {
      client_name: "",
      client_email: "",
      total: 0,
      due_date: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    validatorAdapter: valibotValidator,
  });

  return (
    <div>
      <h2 className={styles.title}>Add new invoice</h2>
      <form.Provider>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
        >
          <form.Field
            name={"client_name"}
            validators={{
              onSubmit: string([
                minLength(3, "Client name must be at least 3 characters"),
              ]),
            }}
            children={(field) => (
              <>
                <Input
                  placeholder="Toni"
                  error={field.state.meta.errorMap.onSubmit}
                  sx={{ width: "100%" }}
                  id={field.name}
                  onChange={(e) => field.handleChange(e.target.value)}
                  label="Client´s name"
                />
              </>
            )}
          />
          <form.Field
            name={"client_email"}
            validators={{
              onSubmit: string([
                minLength(3, "Email must be at least 3 characters"),
                email("Email must be valid"),
              ]),
            }}
            children={(field) => (
              <>
                <Input
                  placeholder="example@gmail.com"
                  error={field.state.meta.errorMap.onSubmit}
                  sx={{ width: "100%" }}
                  id={field.name}
                  onChange={(e) => field.handleChange(e.target.value)}
                  label="Client´s email"
                />
              </>
            )}
          />
          <form.Field
            name={"total"}
            validators={{
              onSubmit: number([
                minValue(1, "Must be greater than 1"),
                maxValue(2000000, "Maximum allowed is $200,000"),
              ]),
            }}
            children={(field) => (
              <>
                <Input
                  placeholder="$1000"
                  type="number"
                  error={field.state.meta.errorMap.onSubmit}
                  sx={{ width: "100%" }}
                  id={field.name}
                  onChange={(e) => field.handleChange(Number(e.target.value))}
                  label="Total amount"
                />
              </>
            )}
          />
          <form.Field
            name={"due_date"}
            validators={{
              onSubmit: date("Due date can´t be before today and is required", [
                minValue(new Date()),
              ]),
            }}
            children={(field) => (
              <>
                <Input
                  placeholder="2023/12/12"
                  error={field.state.meta.errorMap.onSubmit}
                  sx={{ width: "100%" }}
                  type="date"
                  id={field.name}
                  onChange={(e) => field.handleChange(new Date(e.target.value))}
                  label="Date"
                />
              </>
            )}
          />
          <div className={styles.flexButtons}>
            <Button
              type="reset"
              onClick={() => setOpenDrawer(false)}
              variant={"secondary"}
              sx={{ marginTop: 10, maxWidth: 120 }}
              label="Cancelar"
            />
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  sx={{ marginTop: 10, maxWidth: 120 }}
                  label="Save changes"
                  type="submit"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? "..." : "Submit"}
                </Button>
              )}
            />
          </div>
        </form>
      </form.Provider>
    </div>
  );
};
