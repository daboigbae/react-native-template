#!/usr/bin/env bash
# DAD audit greps — mirrors the audit reference in topic 19 of platform-knowledge.
# Run via `npm run lint:dad`. Non-zero exit on any hit.
set -u
RED=$(tput setaf 1 2>/dev/null || true)
RESET=$(tput sgr0 2>/dev/null || true)
fail=0

run_check() {
  local label="$1"; shift
  local out
  out=$("$@" 2>/dev/null || true)
  if [ -n "$out" ]; then
    echo "${RED}✗ $label${RESET}"
    echo "$out"
    echo
    fail=1
  else
    echo "✓ $label"
  fi
}

# NativeWind v4 Pressable callback bug (topic 02)
run_check "Pressable style callback (NativeWind v4 silent drop)" \
  rg -n 'style=\{\(\{ pressed' app components

# Legacy Animated import
run_check "Legacy Animated import" \
  rg -n "from 'react-native'" app components -A 1 | rg -w "Animated" || true

# AsyncStorage holding tokens
run_check "AsyncStorage anywhere (banned by Tier 1 rule 5)" \
  rg -n "AsyncStorage" app components lib

# Inline styles missing the // inline: marker
run_check "Inline style without // inline: comment marker (rule 8 exception)" \
  rg -n 'style=\{\{' app components | rg -v '// inline:'

# Hardcoded hex outside theme
run_check "Hardcoded hex colors outside lib/theme/" \
  rg -n '#[0-9a-fA-F]{3,8}' app components --glob '!lib/theme/**'

# console.log in app code
run_check "console.log in app/components/lib" \
  rg -n 'console\.log' app components lib

# FlatList in app code (FlashList only)
run_check "FlatList import (use FlashList)" \
  rg -n "from 'react-native'" app components -A 1 | rg "FlatList" || true

# TouchableOpacity / TouchableHighlight
run_check "Touchable* import (use Pressable)" \
  rg -n "TouchableOpacity|TouchableHighlight" app components

# SafeAreaView from react-native
run_check "SafeAreaView from react-native (use useSafeAreaInsets)" \
  rg -n "SafeAreaView.*from 'react-native'" app components

# any in TypeScript
run_check "Explicit any" \
  rg -n ': any\b' app components lib

if [ $fail -eq 0 ]; then
  echo
  echo "✓ DAD audit clean"
fi
exit $fail
