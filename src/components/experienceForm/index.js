import React, { useEffect, useState } from "react";
import { Input } from "../../atoms/inputs";
import Button from "../../atoms/buttons";
import TextArea from "../../atoms/text-area";
// import { batch, useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Spinner from "../../atoms/spinner";

const Index = ({ onSubmitForm, isCreate, appId }) => {
  // const dispatch = useDispatch();
  // const { userInfo } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appInfo, setAppInfo] = useState({});

  const formik = useFormik({
    initialValues: {
      title: appInfo.title || "",
      username: appInfo.username || "",
      // imageUrl: appInfo.image_url || "",
      // logoUrl: appInfo.logo || "",
      // subTitle: appInfo.sub_title || "",
      // backgroundColor: appInfo.bg_color || "",
      // coverImageUrl: appInfo.cover_image || "",
      description: appInfo.description || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      // setIsSubmitting(true);
      // const appData = {
      //   user_id: userInfo.username,
      //   title: values.title,
      //   sub_title: values.subTitle,
      //   image_url: values.imageUrl,
      //   description: values.description,
      //   cover_image: values.coverImageUrl,
      //   bg_color: values.backgroundColor,
      //   logo: values.logoUrl,
      //   public_name: values.publicName,
      // };
      //
      // if (isCreate) {
      //   dispatch(createApp(appData)).then(() => {
      //     onSubmitForm();
      //     dispatch(getApps(userInfo.username));
      //   });
      // } else {
      //   setAppInfo(appData);
      //   dispatch(
      //     editApp({
      //       app_id: appId,
      //       ...appData,
      //     })
      //   ).then(() => {
      //     onSubmitForm();
      //     dispatch(getApps(userInfo.username));
      //   });
      // }
      formik.resetForm();
    },
  });

  const { handleSubmit, handleChange, handleBlur, values } = formik;

  // useEffect(() => {
  //   setIsLoading(false);
  //   if (!isCreate) {
  //     setIsLoading(true);
  //     dispatch(getAppById(appId)).then((res) => {
  //       setAppInfo({ ...res.payload });
  //       setIsLoading(false);
  //     });
  //   }
  // }, [dispatch, appId, isCreate]);

  return (
    <>
      {!isLoading ? (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-end p-6 gap-6 max-w-[660px] w-full transition-all ease-in-out duration-300">
            <div className="flex flx-row items-start p-0 gap-[27px] w-full">
              <div className="flex flex-col columns-2 items-start gap-[27px] p-0  order-1 w-full  ">
                <Input
                  fullWidth={true}
                  label={"Title"}
                  type={"default"}
                  corner={"rectangle"}
                  border={true}
                  size={"medium"}
                  name={"title"}
                  id={"title"}
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <Input
                  fullWidth={true}
                  label={"User Name"}
                  type={"default"}
                  corner={"rectangle"}
                  border={true}
                  size={"medium"}
                  name={"username"}
                  id={"username"}
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {/*<Input*/}
                {/*  fullWidth={true}*/}
                {/*  label={"Image Url"}*/}
                {/*  type={"default"}*/}
                {/*  corner={"rectangle"}*/}
                {/*  border={true}*/}
                {/*  size={"medium"}*/}
                {/*  name={"imageUrl"}*/}
                {/*  id={"imageUrl"}*/}
                {/*  value={values.imageUrl}*/}
                {/*  onBlur={handleBlur}*/}
                {/*  onChange={handleChange}*/}
                {/*/>*/}
                {/*<Input*/}
                {/*  fullWidth={true}*/}
                {/*  label={"Logo url"}*/}
                {/*  type={"default"}*/}
                {/*  corner={"rectangle"}*/}
                {/*  border={true}*/}
                {/*  size={"medium"}*/}
                {/*  name={"logoUrl"}*/}
                {/*  id={"logoUrl"}*/}
                {/*  value={values.logoUrl}*/}
                {/*  onBlur={handleBlur}*/}
                {/*  onChange={handleChange}*/}
                {/*/>*/}
              </div>
              {/*<div className="flex flex-col items-start gap-[27px] p-0   order-1 w-full ">*/}
              {/*  <Input*/}
              {/*    fullWidth={true}*/}
              {/*    label={"Sub Title"}*/}
              {/*    type={"default"}*/}
              {/*    corner={"rectangle"}*/}
              {/*    border={true}*/}
              {/*    size={"medium"}*/}
              {/*    name={"subTitle"}*/}
              {/*    id={"subTitle"}*/}
              {/*    value={values.subTitle}*/}
              {/*    onBlur={handleBlur}*/}
              {/*    onChange={handleChange}*/}
              {/*  />*/}
              {/*  <Input*/}
              {/*    fullWidth={true}*/}
              {/*    label={"Background Color "}*/}
              {/*    type={"default"}*/}
              {/*    corner={"rectangle"}*/}
              {/*    border={true}*/}
              {/*    size={"medium"}*/}
              {/*    name={"backgroundColor"}*/}
              {/*    id={"backgroundColor"}*/}
              {/*    value={values.backgroundColor}*/}
              {/*    onBlur={handleBlur}*/}
              {/*    onChange={handleChange}*/}
              {/*  />*/}
              {/*  <Input*/}
              {/*    fullWidth={true}*/}
              {/*    label={"Cover Image Url"}*/}
              {/*    type={"default"}*/}
              {/*    corner={"rectangle"}*/}
              {/*    border={true}*/}
              {/*    size={"medium"}*/}
              {/*    name={"coverImageUrl"}*/}
              {/*    id={"coverImageUrl"}*/}
              {/*    value={values.coverImageUrl}*/}
              {/*    onBlur={handleBlur}*/}
              {/*    onChange={handleChange}*/}
              {/*  />*/}
              {/*</div>*/}
            </div>
            <TextArea
              id="description"
              name="description"
              rows="5"
              border={true}
              label="Your Experience"
              fullWidth={true}
              className={"outline-none"}
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Button
              type="submit"
              intent={"primary"}
              size={"medium"}
              corner={"rectangle"}
              className="bg-teal-900"
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit Response"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="max-w-[660px] w-full min-h-[570px] flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Index;
