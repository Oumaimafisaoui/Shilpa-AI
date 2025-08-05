from fastapi import FastAPI, HTTPException
import uvicorn

app = FastAPI()


@app.get("/")
def root_route():
    return{"massage":"Hello, World!"}






if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True, debug=True)