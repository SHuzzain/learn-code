import { useEffect } from "react";
import { useNavigate } from "react-router";

const LanguagePage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/");
  }, [navigation]);

  return null;
};

export default LanguagePage;
