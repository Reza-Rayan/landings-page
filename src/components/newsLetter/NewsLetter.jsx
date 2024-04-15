import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
});

const NewsLetter = () => {
  const { handleSubmit, control, reset } = useForm({
    resolver: async data => {
      try {
        await schema.validate(data, { abortEarly: false });
        return { values: data, errors: {} };
      } catch (errors) {
        const formattedErrors = errors.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        return { values: {}, errors: formattedErrors };
      }
    },
  });

  const onSubmit = data => {
    // Handle your form submission logic here
    console.log("Form data:", data);

    // Reset the form
    reset();

    // Show success message using SweetAlert
    Swal.fire({
      icon: "success",
      title: "عضویت موفقیت آمیز بود!",
      showConfirmButton: false,
      timer: 3000,
      position: "center-center",
    });
  };

  return (
    <div className=" lg:w-[800px]  mx-auto">
      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-2 text-slate-700 dark:text-white pb-10">
        عضویت در{" "}
        <strong className="bg-indigo-600 text-white rounded-lg px-2 p-1.5">
          خبرنامه
        </strong>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-4">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  placeholder="ایمیل خود را وارد کنید"
                  className={`input input-bordered input-primary lg:lg:w-[600px]  bg-slate-100 rounded-lg ${
                    fieldState.invalid ? "border-red-500" : ""
                  }`}
                />
                {fieldState.invalid && (
                  <p className="text-red-500">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
          <button className="btn btn-primary text-white rounded-lg">
            عضویت
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
