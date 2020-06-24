import os
from dotenv import load_dotenv

base_dir_env = os.path.abspath(os.path.join(os.path.dirname(__file__), "../", ".env"))

#print(base_dir_env)

load_dotenv()
#load_dotenv(dotenv_path=base_dir_env)