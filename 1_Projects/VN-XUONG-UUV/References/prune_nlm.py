"""NLM Source Pruner - Delete sources not in KEEP/MAYBE lists."""
import subprocess
import sys
import time
import json

NLM = r"C:\Users\ADMIN\AppData\Roaming\Python\Python313\Scripts\nlm.exe"

# F1 KEEP + MAYBE prefixes (8-char)
F1_KEEP = {
    # KEEP (~47)
    "f535c419", "3cd48a21", "35a9a988", "710bd95a", "434f292b", "ea9654ea", "afa1b1b3", "d469c5f2",
    "f312a75b", "8042a1ec", "f2249e2c", "1c320d7a", "65e63fd4", "f6eb8fa1", "cc56dc8e", "a830da7e",
    "b251ddea", "c2b2ba8f", "d4df6de1", "71ff0597", "4da5dcbb", "1c61a3b5", "43b8d1e9", "b2760a49",
    "0945ffec", "2c6d92dc", "945087bd", "5ed89153", "320fd4f6", "736e10cf", "5d918781", "a51f417c",
    "45128722", "81cecd45", "32752675", "8ad324fd", "5789cb38", "7b3531b8", "99b85602", "1d5ad6c7",
    "97e2cf9a", "d3ae6f2f", "d3421549", "35ded9b9",
    # MAYBE (~38)
    "82e0055e", "b522b92b", "ac11839c", "3acb9467", "7d765070", "e2357bd7", "7cfbe43a", "546241fd",
    "cf91a57c", "72556edf", "43f38243", "17d3970b", "d43c19ea", "9c580f24", "1b173e61", "1615b312",
    "36af09bb", "b02559ff", "997f92c1", "8d2dc3b6", "cf4832d0", "21e62757", "5c549fb1", "f0d4944a",
    "f1d85c61", "d0de47b7", "ff4a525e", "c7529b58", "3ce18ee3", "5c77af7e", "6caa2c25", "8faea731",
    "d11d6418", "fe929a97", "24e211fb", "629665d7", "404ef08d", "40ed6e86", "655be837", "3effd841",
    "b515cd1d",
}

# F9 KEEP prefixes (8-char) - from backup file
F9_KEEP = {
    # KEEP — Davit & Crane Systems (26)
    "0f265bcf", "2199b116", "1073c695", "8e50d776", "93401775", "c4d8c0c1", "180d9b95", "4bee5e2c",
    "5fda629e", "0cbd1ecd", "345f167e", "8e018460", "390228c3", "21ed9bab", "5ab4c82d", "8073a05b",
    "ebea8aaa", "2cc1b775", "4423536e", "5fba041d", "5a393950", "95dcc59e", "87e20fce", "6ae974e8",
    "6450a224", "3821d178",
    # KEEP — Heave Compensation & Winch (2)
    "0371b3eb", "123f905f",
    # KEEP — Quick Release / Snap Shackles (6)
    "d44fa62c", "edbe5312", "fcd5e676", "19c6b8fa", "1fc33869", "b2d98b4a",
    # KEEP — Tender Towing & Deployment (4)
    "8ac0bfc9", "f1611b0c", "c4d061d2", "7d055f2f",
    # KEEP — Ship-to-Ship Transfer (2)
    "dfe2ceb4", "648fb902",
    # KEEP — Stern Ramp (1)
    "4cc8c9ee",
    # MAYBE — General Crane & Winch Design (5)
    "4ccf4c0b", "57068ff0", "27eccdc4", "869eff29", "638d71d9",
    # MAYBE — Towing Systems General (12)
    "4cb4c4db", "8db69d8b", "d3b39a29", "9d85b120", "b48f01ac", "0991be43",
    "1296287b", "a4a5d71a", "8a35d84f", "fa59eac3", "5e0a438c", "62644ec8",
    # MAYBE — Boat/Vessel Operations (4)
    "d5fe30e2", "327d6d92", "e85136c0", "2ff090b2",
    # MAYBE — Hull/Stability items from REMOVE that should be kept for F9 context
    "2444af5c", "5f1a5d27", "334171e0", "4af978cf",
}


def get_sources(notebook_id):
    """Get all source UUIDs from a notebook."""
    r = subprocess.run(
        [NLM, "source", "list", notebook_id, "--quiet"],
        capture_output=True, text=True, encoding="utf-8"
    )
    if r.returncode != 0:
        print(f"ERROR listing sources: {r.stderr}")
        sys.exit(1)
    return [line.strip() for line in r.stdout.strip().split("\n") if line.strip()]


def delete_source(source_id):
    """Delete a single source. Returns True on success."""
    r = subprocess.run(
        [NLM, "source", "delete", source_id, "--confirm"],
        capture_output=True, text=True, encoding="utf-8"
    )
    return r.returncode == 0


def prune_notebook(name, notebook_id, keep_prefixes, dry_run=False):
    """Prune a notebook, keeping only sources whose 8-char prefix is in keep_prefixes."""
    print(f"\n{'='*60}")
    print(f"PRUNING: {name}")
    print(f"Notebook: {notebook_id}")
    print(f"{'='*60}")

    sources = get_sources(notebook_id)
    print(f"Current sources: {len(sources)}")

    to_delete = []
    to_keep = []
    for sid in sources:
        prefix = sid[:8]
        if prefix in keep_prefixes:
            to_keep.append(sid)
        else:
            to_delete.append(sid)

    print(f"To KEEP: {len(to_keep)}")
    print(f"To DELETE: {len(to_delete)}")

    if not to_delete:
        print("Nothing to delete!")
        return

    if dry_run:
        print("\n[DRY RUN] Would delete these sources:")
        for sid in to_delete:
            print(f"  {sid[:8]}... {sid}")
        print(f"\n[DRY RUN] Total: {len(to_delete)} deletions")
        return

    deleted = 0
    failed = 0
    batch_size = 10

    for i in range(0, len(to_delete), batch_size):
        batch = to_delete[i:i+batch_size]
        print(f"\nBatch {i//batch_size + 1}/{(len(to_delete)-1)//batch_size + 1} ({len(batch)} sources)...")

        for sid in batch:
            ok = delete_source(sid)
            if ok:
                deleted += 1
                print(f"  OK: {sid[:8]}...")
            else:
                failed += 1
                print(f"  FAIL: {sid[:8]}...")
            time.sleep(1.5)  # 1.5s between deletes

        # Verify after each batch
        remaining = get_sources(notebook_id)
        print(f"  Verified: {len(remaining)} sources remaining")
        time.sleep(2)  # Extra pause between batches

    print(f"\n--- SUMMARY for {name} ---")
    print(f"Deleted: {deleted}, Failed: {failed}")
    final = get_sources(notebook_id)
    print(f"Final count: {len(final)}")


if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "both"
    dry_run = "--dry-run" in sys.argv

    if target in ("f1", "both"):
        prune_notebook(
            "F1 — Hull Type Selection",
            "679c8bf6-e634-473d-871a-af5a5e0f650f",
            F1_KEEP,
            dry_run=dry_run,
        )

    if target in ("f9", "both"):
        prune_notebook(
            "F9 — Tender Deployment",
            "ecffc089-c6eb-4f66-baa7-b9832ef8f496",
            F9_KEEP,
            dry_run=dry_run,
        )
