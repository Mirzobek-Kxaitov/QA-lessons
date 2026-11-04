"""Publish generated data without creating a website deployment."""
import sys
from snapshot_store import publish

if __name__=='__main__':publish(sys.argv[1:])
