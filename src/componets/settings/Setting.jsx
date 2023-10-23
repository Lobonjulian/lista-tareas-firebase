import useLocalStorage from "../../hooks/useLocalStorage";

const defaultConfig = {
  theme: "dark",
  lang: "es",
}
export default function Setting({toggleDark}) {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);


  const toggleMode = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => ({
      ...oldConfig,
      theme: oldConfig.theme === "dark" ? "light" : "dark",
    }));
    toggleDark();
  }
  return (
    <div className="text-right">
      <hr className="my-4"/>
      <h1 className="text-3xl font-semibold text-cyan-600 mb-4 dark:text-cyan-300">App Setting</h1>
      <p className="text-sm">Actual Config:<span className="italic">{config.theme}</span></p>
      <button className="btn mt-4" type="button" onClick={toggleMode}>Toggle DarkMode</button>   
    </div>
  )
}