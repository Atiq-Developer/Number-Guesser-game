"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

function NumberGuessingGame() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1-100
  }

  function handleGuess() {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setFeedback("Please enter a valid number!");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (userGuess === targetNumber) {
      setFeedback(
        `🎉 Congratulations! You guessed the number in ${
          attempts + 1
        } attempts.`
      );
    } else if (userGuess < targetNumber) {
      setFeedback("📉 Too low! Try again.");
    } else {
      setFeedback("📈 Too high! Try again.");
    }
  }

  function resetGame() {
    setTargetNumber(generateRandomNumber());
    setGuess("");
    setFeedback("");
    setAttempts(0);
  }

  return (
    <div className="w-full max-w-md space-y-4 p-6 shadow-lg rounded-md  border-2 border-[#A2D3E4] bg-[#B3E0F2] bg-opacity-90 text-card-foreground shadow-[#4EBDC4] ring-2 ring-[#A2D3E4] ring-opacity-30">
      <h1 className="text-2xl font-bold text-gray-800">Number Guessing Game</h1>
      <p className="text-gray-700">Guess the number (between 1 and 100):</p>

      <Input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        className="mb-4"
      />

      <Button onClick={handleGuess} className="w-full">
        Guess
      </Button>

      {feedback && (
        <Alert variant="default" className="bg-red-200">
          <AlertTitle>Feedback</AlertTitle>
          <AlertDescription>{feedback}</AlertDescription>
        </Alert>
      )}

      {feedback.includes("Congratulations") && (
        <Button
          onClick={resetGame}
          variant="secondary"
          className="w-full bg-black text-white hover:bg-gray-900"
        >
          Play Again
        </Button>
      )}
    </div>
  );
}

export default NumberGuessingGame;
