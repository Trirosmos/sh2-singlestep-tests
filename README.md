# Hitachi SH-2 JSON tests

Changes from SH-4 test suite:

- Remove tests with SZ != 0 or PR != 0, since those don't exist on a SH-2
- Remove floating point registers from initial and final state
- Remove status registers that don't exist on SH-2 from initial and final state
