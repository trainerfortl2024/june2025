# 🖥️ Setup Guide: Check Processor Type and Install MySQL

## 🔍 Step 1: Check Your Processor Type

### ✅ For Windows:
1. Press `Windows + I` to open **Settings**.
2. Navigate to **System → About**.
3. Look under **Device specifications** for **System type**:
   - If you see: `64-bit operating system, x64-based processor` → Your processor is **x64**.
   - If you see: `ARM-based processor` → Your processor is **ARM**.

👉 Based on the result:
- **x64 processor**: Download `vc_redist.x64.exe`
- **ARM processor**: Download `vc_redist.arm64.exe`

## ✅ Check Installed C++ Redistributables Using Command Prompt

You can use the Command Prompt to list all installed Microsoft Visual C++ Redistributables:

1. Open **Command Prompt** as Administrator:
   - Press `Windows + S`, type `cmd`
   - Right-click on **Command Prompt** → choose **Run as administrator**

2. Run the following command:

   ```cmd
   wmic product where "Name like 'Microsoft Visual C++%'" get Name, Version
   ```
This will display a list of all installed Microsoft Visual C++ Redistributable packages along with their versions, like:  
```bash
Microsoft Visual C++ 2015-2022 Redistributable (x64)   14.36.32532
Microsoft Visual C++ 2015-2022 Redistributable (x86)   14.36.32532
```

Make sure at least version 14.x.xxxxx (2015 or later) is installed for MySQL 8 compatibility.

If its not download it from below link  
   

> Download from:
> [https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)  
> windows 64 processor link - https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170

---

### ✅ For macOS:
1. Click the **Apple menu** → **About This Mac**.
2. Check the **Chip** or **Processor**:
   - **Apple M1, M2, M3** → ARM (Apple Silicon)
   - **Intel** → Intel-based (x64)

---

## 🔽 Step 2: Download and Install MySQL

### ✅ For Windows:
1. Visit the official MySQL download page:  
   [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
2. Click **"Windows (x86, 32-bit), MSI Installer"**.
3. Download the **mysql-installer-community** package.
4. Run the installer and follow the prompts:
   - Choose **Developer Default** setup (includes Server, Workbench, and connectors).
   - Set root password.
   - Complete installation.

---

### ✅ For macOS:
1. Go to the macOS MySQL download page:  
   [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)
2. Scroll to **macOS (x86, 64-bit)** or **macOS (ARM, 64-bit)** based on your chip type.
3. Download the **DMG Archive**.
4. Install and follow the instructions:
   - Set a root password.
   - Optionally install **MySQL Workbench** for database GUI.

---

# 🚀 MySQL and Workbench Installation Guide
## 🪟 Windows Setup

### ✅ MySQL Server (Windows)

1. 🔗 **Download MySQL Installer (Community Edition):**  
   [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)

2. 📦 **Choose**: `mysql-installer-community-<version>.msi`

3. ⚙️ **Run the Installer**  
   - Choose **Developer Default** (includes MySQL Server, Workbench, Shell)
   - Proceed through the setup steps

4. 🔐 **Configure MySQL Server**
   - Set a strong **root password** and **note it down**
   - Keep default port: `3306`

5. ✅ **Finish Installation**

---

### ✅ MySQL Workbench (Windows - Standalone Installer) (optional , if its alread installed in the prev. section)

1. 🔗 **Download Workbench (Standalone):**  
   [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

2. 📦 **Choose**: `Windows (x86, 64-bit), MSI Installer`

3. 💻 **Install Workbench**  
   - Launch Workbench
   - Connect to `localhost:3306` using `root` user

---

## 🍎 macOS Setup

### ✅ MySQL Server (macOS)

1. 🔗 **Download MySQL Server for macOS:**  
   [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

2. 💡 Choose the right version:
   - **macOS (x86, 64-bit)** for Intel Macs
   - **macOS (ARM, 64-bit)** for Apple Silicon (M1/M2/M3)

3. 📦 **Download and Install** the `.dmg` file

4. 🔐 **Set a root password** during installation and **note it**

5. ✅ **MySQL Server will be installed via System Preferences pane**

---

### ✅ MySQL Workbench (macOS - Standalone Installer) ( optional , if its alread installed in the prev. section)


1. 🔗 **Download Workbench (macOS):**  
   [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

2. 💡 Choose based on architecture:
   - `macOS (x86, 64-bit)` for Intel Macs
   - `macOS (ARM, 64-bit)` for Apple Silicon

3. 📦 **Download the .dmg file and install**

4. 💻 **Open Workbench** and connect to:
   - Host: `localhost`
   - Port: `3306`
   - User: `root`
   - Password: (your configured password)

---

> ✅ Once both MySQL Server and Workbench are installed, you're ready to create schemas (databases), tables, and connect from Express.js backend!






# Start and Configure MySQL Server
## Start MySQL Installer:
* After installing MySQL using the MSI installer, launch the MySQL Installer.  
* If the MySQL Server is not started automatically, you can start it from the MySQL Installer interface.

## Configure MySQL Server:
* You will be asked to choose the Setup Type. Select Developer Default for a development environment, which includes all necessary tools (e.g., MySQL Server, MySQL Workbench, and more).  
* Choose the configuration options:  
  * Server Configuration Type: Select Development Machine (this is for local development).  
  * Authentication Method: Choose Use Strong Password Encryption for Authentication.   
  * Root Password: Set the root password (e.g., root123), which is the default MySQL administrative account. You will need to remember this password for logging in to MySQL via Workbench and command line.  
  * Configure MySQL as a Windows Service: This allows MySQL to start automatically when your computer starts.
 

## Complete Configuration:
* Once you've configured the options, proceed with the remaining steps to finish setting up MySQL Server. The installation will complete, and you will be able to run MySQL on your local machine.

# Open MySQL Workbench to Start Writing Queries
## Launch MySQL Workbench:
* Open MySQL Workbench from the Start Menu (or search for it).  
* When you launch MySQL Workbench, you will see a "MySQL Connections" window. This is where you can set up connections to your local MySQL server.  
* Connect to MySQL Server:

  * Click on the + icon next to "MySQL Connections" to create a new connection.  
  * In the connection setup window:
  ```
  Connection Name: Give your connection a name (e.g., "Local MySQL").
  Connection Method: Leave this as Standard (TCP/IP).
  Hostname: Enter localhost (since the MySQL server is running locally).
  Port: Use the default port 3306.
  Username: Use root (the default MySQL administrative username).
  Password: Enter the password you set during the MySQL server configuration (e.g., root123).
  ```
  
  * Test Connection: Click on Test Connection to ensure everything is configured correctly. If the connection is successful, you should see a confirmation message.
 

## Start Writing Queries:
* Once the connection is successful, click OK to save the connection.  
* Now, click on the connection you just created to open a new SQL query tab. 
 
* In the SQL editor, you can start writing your MySQL queries. For example, to show the databases, you can run:
```mysql
show databases;
```