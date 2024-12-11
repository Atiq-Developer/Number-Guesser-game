import NumberGuessingGame from "@/components/NumberGuessingGame";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/79/75/45/360_F_279754521_z5fz8zm9AoqIriAaeKOKWPTmuh1Xr2Qg.jpg')",
        backgroundSize: "cover", // Ensures the image scales to cover the screen
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
        imageRendering: "auto", // Ensures smooth scaling
      }}
    >
      <main className="flex min-h-screen items-center justify-center bg-opacity-80 p-4">
        <NumberGuessingGame />
      </main>
    </div>
  );
}
