
## 🤖 ASGI vs WSGI – Quick Note for Bots & FastAPI

### 🔸 WSGI – Old School (Synchronous)

* Used by: **Flask, Django (classic)**
* Handles only **HTTP requests**
* ❌ Cannot handle WebSockets or async calls
* ❌ Not ideal for real-time bots or fast APIs

### 🔹 ASGI – Modern (Asynchronous)

* Used by: **FastAPI, Django Channels**
* ✅ Supports WebSockets, HTTP, long-lived connections
* ✅ Perfect for AI bots, chat apps, real-time features
* ✅ Async/await supported

---

### ✅ Use ASGI for Bots / AI Apps

If you build:

* Chatbots 🗣️
* Realtime dashboards 📊
* AI-powered assistants 🤖
* Anything async / streaming 🚀

👉 **Use FastAPI + Uvicorn (ASGI)**

---

### ⚙️ How to Run ASGI App (FastAPI)

```bash
uvicorn app:app --reload
```

### ⚙️ How to Run WSGI App (Flask)

```bash
flask run
```
