# 200 - Requirements

We use [pipx](https://github.com/pypa/pipx?tab=readme-ov-file#install-pipx) instead of ```pip```, for isolation.

1. Install pipx:
   see https://github.com/pypa/pipx?tab=readme-ov-file#install-pipx for platform (Linux, macOS, Windows) specifics.

   Linux:
   ```bash
   $ python3 -m pip install --user pipx
   $ python3 -m pipx ensurepath
   $ source ~/.bashrc
   $ sudo pipx ensurepath --global # optional to allow pipx actions with --global argument
   ```

   macOS:
   ```bash
   $ brew install pipx
   $ pipx ensurepath
   $ sudo pipx ensurepath --global # optional to allow pipx actions with --global argument
   ```

   Windows:
   ```bash
   $ scoop install pipx
   $ pipx ensurepath
   ```

2. Install python with pipx:
   ```bash
   $ pipx install python
   ```

We use [hatch](https://hatch.pypa.io/) for project management. 

1. Install hatch:
   ```bash
   # pip install hatch # This method modifies the Python environment in which you choose to install. Consider instead using pipx to avoid dependency conflicts.
   $ pipx install hatch 
   $ hatch --version # verify the version
   ```