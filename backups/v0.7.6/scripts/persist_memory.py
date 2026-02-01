import asyncio
import sys
import os

# Add the playground venv site-packages to path explicitly if needed, 
# but running with the venv python exe is better.

from openmemory.main import Memory

async def main():
    print("Initializing OpenMemory...")
    try:
        # Initialize memory for the current agent/user
        mem = Memory(user="antigravity_user")
        
        # Construct the project snapshot
        project_snapshot = """
        [PROJECT SNAPSHOT: Six Sigma Learning Platform]
        Date: 2026-01-30
        Location: E:/Learning Six Sigma
        Version: 0.6.1 (Stability & Sync Success)
        
        SUMMARY:
        Web-based IASSC Green Belt learning app. English/Vietnamese.
        Now features Cloud Sync (Supabase), AI Tutor (Perplexity), and Dashboard Analytics.
        
        STATUS:
        - Version 0.6.1: STABLE.
        - Core Success:
            1. Cloud Sync: Robust, debounced saving with Error Diagnostics in Sidebar.
            2. Build: Fixed TypeScript circular deps and enum errors.
            3. AI: Upgraded to Perplexity/Sonar-Pro for context-aware answers.
        
        KEY RESOURCES:
        - Logic Map: docs/ai_context/LOGIC_MAP.md
        - State: docs/ai_context/PROJECT_STATE.md
        - Master Context: docs/ai_context/MASTER_CONTEXT_V0.6.md
        
        NEXT ACTION:
        - Phase 3: Learning Intelligence (Recommendations).
        - Adaptive Learning implementation.
        """
        
        print("Adding snapshot to memory...")
        result = await mem.add(
            content=project_snapshot, 
            tags=["project_state", "six_sigma", "snapshot", "v0.6.1", "sync_stable"]
        )
        
        print(f"SUCCESS: Memory persisted with ID: {result.get('id')}")

    except Exception as e:
        print(f"ERROR: Failed to persist memory: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(main())
