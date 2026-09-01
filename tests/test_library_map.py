import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

EXPECTED_CLONES = [
    "anthropics-claude-cookbooks",
    "cursor-cookbook",
    "patrickjs-awesome-cursorrules",
    "farzannajipour-cursor-react-rules",
    "jesseoue-cursor-rules",
    "survivorforge-cursor-rules",
    "vercel-ai",
    "cursor-community-plugins",
]

class LibraryMapTests(unittest.TestCase):
    def test_readme_lists_clone_folders(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        for name in EXPECTED_CLONES:
            self.assertIn(name, readme)

    def test_gitignore_ignores_clones(self):
        gitignore = (ROOT / ".gitignore").read_text(encoding="utf-8")
        for name in EXPECTED_CLONES:
            self.assertIn(f"{name}/", gitignore)


if __name__ == "__main__":
    unittest.main()
